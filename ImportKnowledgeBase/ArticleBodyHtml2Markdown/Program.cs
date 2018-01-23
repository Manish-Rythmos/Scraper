using System;
using Html2Markdown;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace ArticleBodyHtml2Markdown
{
    class Program
    {
        static string tocFileName = "TableOfContents.json";
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string knowledgeBaseDirectoryPath = @"D:\KBArticle";

            if (Directory.Exists(knowledgeBaseDirectoryPath))
            {
                // This path is a directory
                ProcessDirectory(knowledgeBaseDirectoryPath);
                ConvertFileSystemToTreeStructureObject(knowledgeBaseDirectoryPath);
            }
        }

        // Process all files in the directory passed in, recurse on any directories 
        // that are found, and process the files they contain.
        public static void ProcessDirectory(string targetDirectory)
        {
            // Process the list of files found in the directory.
            List<string> fileEntries = Directory.GetFiles(targetDirectory).Where(file => file.ToLower().EndsWith("html")).ToList();
            foreach (string fileName in fileEntries)
            {
                ProcessFileWithReverseMarkdown(fileName);
            }

            // Recurse into subdirectories of this directory.
            string[] subdirectoryEntries = Directory.GetDirectories(targetDirectory);
            foreach (string subdirectory in subdirectoryEntries)
                ProcessDirectory(subdirectory);
        }

        // Insert logic for processing found files here.
        public static void ProcessFile(string path)
        {
            Console.WriteLine("Processed file '{0}'.", path);

            //var html = "Something to <strong>convert</strong>";
            //var converter = new Converter();
            //var markdown = converter.Convert(html);

            Converter converter = new Converter();
            string markdown = converter.ConvertFile(path);

            // Replace html <u> and </u> tag with empty space
            // markdown = markdown.Replace("<u>", "").Replace("</u>", "");

            string directoryPath = path.Substring(0, path.LastIndexOf('\\'));
            string htmlFileName = path.Substring(path.LastIndexOf('\\') + 1);
            string mdFileName = path.Substring(path.LastIndexOf('\\') + 1).Replace(".html", ".md");

            // Before writing markdown to the md file some small modifications
            // Replace '$' with '\$'
            markdown = markdown.Replace("$", "\\$");

            TextWriter txt = new StreamWriter(Path.Combine(directoryPath, mdFileName));
            txt.Write(markdown);
            txt.Close();
        }


        public static void ProcessFileWithReverseMarkdown(string path)
        {
            Console.WriteLine("Processed file '{0}'.", path);

            // with config
            string unknownTagsConverter = "pass_through";
            bool githubFlavored = true;
            var config = new ReverseMarkdown.Config(unknownTagsConverter, githubFlavored);

            var converter = new ReverseMarkdown.Converter(config);
            string markdown = converter.Convert(File.ReadAllText(path));

            // Replace html <u> and </u> tag with empty space
            // markdown = markdown.Replace("<u>", "").Replace("</u>", "");

            string directoryPath = path.Substring(0, path.LastIndexOf('\\'));
            string htmlFileName = path.Substring(path.LastIndexOf('\\') + 1);
            string mdFileName = path.Substring(path.LastIndexOf('\\') + 1).Replace(".html", ".md");

            // Before writing markdown to the md file some small modifications
            // Replace '$' with '\$'
            markdown = markdown.Replace("$", "\\$");

            // Replace '<' html tag with '&lt;'
            // Replace '>' html tag with '&gt;'
            //markdown = markdown.Replace("<", "&lt;");
            //markdown = markdown.Replace(">", "&gt;");

            TextWriter txt = new StreamWriter(Path.Combine(directoryPath, mdFileName));
            txt.Write(markdown);
            txt.Close();
        }

        public static void ConvertFileSystemToTreeStructureObject(string fileSystemPath)
        {
            string fileParentPath = string.Empty;
            List<TreeNode> treeNodes = new List<TreeNode>();
            List<string> directories = Directory.GetDirectories(fileSystemPath).ToList();
            foreach (string directory in directories)
            {
                TreeNode newNode = new TreeNode();
                newNode.NodeName = Path.GetFileName(directory);
                fileParentPath = newNode.NodeName;
                if (Directory.GetDirectories(directory).Count() > 0)
                {
                    List<string> childDirectories = Directory.GetDirectories(directory).ToList();
                    foreach (string childDirectory in childDirectories)
                    {
                        TreeNode child = new TreeNode();
                        GetChildFileSystemEntriesRecursively(fileParentPath, childDirectory, child);
                        newNode.ChildNodes.Add(child);
                    }
                }

                if (Directory.GetFiles(directory).Count() > 0)
                {
                    List<string> files = Directory.GetFiles(directory).ToList();
                    foreach (string file in files)
                    {
                        if (Path.GetExtension(file) == ".md")
                        {
                            TreeNode childNode = new TreeNode();
                            childNode.NodeName = Path.GetFileNameWithoutExtension(file);
                            childNode.FileName = fileParentPath + "\\" + Path.GetFileName(file);
                            newNode.ChildNodes.Add(childNode);
                        }
                    }
                }

                treeNodes.Add(newNode);
            }

            string tableOfContent = JsonConvert.SerializeObject(treeNodes);
            File.WriteAllText(fileSystemPath + "\\" + tocFileName, tableOfContent);
        }

        private static void GetChildFileSystemEntriesRecursively(string fileParentPath, string parentDirectory, TreeNode objNode)
        {
            objNode.NodeName = Path.GetFileName(parentDirectory);
            fileParentPath = fileParentPath + "\\" + objNode.NodeName;
            if (Directory.GetDirectories(parentDirectory).Count() > 0)
            {
                List<string> childDirectories = Directory.GetDirectories(parentDirectory).ToList();
                foreach (string childDirectory in childDirectories)
                {
                    TreeNode child = new TreeNode();
                    GetChildFileSystemEntriesRecursively(fileParentPath, childDirectory, child);
                    objNode.ChildNodes.Add(child);
                }
            }

            if (Directory.GetFiles(parentDirectory).Count() > 0)
            {
                List<string> files = Directory.GetFiles(parentDirectory).ToList();
                foreach (string file in files)
                {
                    if (Path.GetExtension(file) == ".md")
                    {
                        TreeNode childNode = new TreeNode();
                        childNode.NodeName = Path.GetFileNameWithoutExtension(file);
                        childNode.FileName = fileParentPath + "\\" + Path.GetFileName(file);
                        objNode.ChildNodes.Add(childNode);
                    }
                }
            }
        }
    }

    public class TreeNode
    {
        private List<TreeNode> childNodes = new List<TreeNode>();

        public string NodeName { get; set; }

        public string FileName { get; set; }

        public List<TreeNode> ChildNodes
        {
            get { return this.childNodes; }
            set { this.childNodes = value; }
        }
    }
}
