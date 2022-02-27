// initialize Antlr 
// create sample visitor for the grammar

using Antlr4.Runtime;
using PruebaAntlrCSharp;

//declare de input with some text
var input = @"
int a;
int b;
string c;
bool d;
//string f=false;
d = true;
c = ""hola"";
a = 3;
b = a + (b * a);
//c = a;
if (b == 4)
    a = a*a*a; 
endif

print a;
print b;";
//print input to parse for debug
Console.WriteLine("-----------------------------------------------------");
Console.WriteLine("---------------------- Input ------------------------");
Console.WriteLine("Input to parse: " + input);
Console.WriteLine("---------------------- End --------------------------");

// create a new input stream from the text
var inputStream = new AntlrInputStream(input);
// create a new lexer from the input stream
var lexer = new SpreadsheetLexer(inputStream);
// create a new stream of tokens from the lexer
var tokenStream = new CommonTokenStream(lexer);
// create a new parser from the token stream
var parser = new SpreadsheetParser(tokenStream);
// create a new parse tree from the parser
var tree = parser.program();
//debug the tree
// Console.WriteLine(tree.ToStringTree(parser));
var visitor = new SpreadsheetVisitor(parser);
visitor.Visit(tree);
// print a line separator
Console.WriteLine("---------------------- Output -----------------------");
// loop through the visitor's type list and print out the types
foreach (var type in visitor.types)
{
    Console.WriteLine(type);
}

Console.WriteLine("---------------------- End --------------------------");

Console.ReadLine();