import antlr4 from 'antlr4';
import MyLexer from './grammar/HelloLexer.js';
import MyParser from './grammar/HelloParser.js';
import print from "print-tree";
const input = `int a;
int b;
a = 3;
b = a + (b * a);
if (b == 4) a = 2; endif
if (a == 3)  
    a = a + 1; 
    b = b + 6;
endif 
print a;
print b;`
const chars = new antlr4.InputStream(input);
const lexer = new MyLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyParser(tokens);
parser.buildParseTrees = true;
const tree = parser.program()
function parse(val){
   return {
      children: val.children?.map(parse) || [],
      name: MyParser.ruleNames[val.ruleIndex] || MyParser.symbolicNames[val.symbol?.type],
      symbol: val.symbol?.text
   }
}
var finalTree = parse(tree);
print(
   finalTree,
   node => `[${node.name}]` + (node.symbol?":" + node.symbol:""),
   node => node.children,
 );
// console.log(parse(tree));

// var extractor = new JSListener()
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)[]