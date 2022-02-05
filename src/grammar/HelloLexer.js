// Generated from ./src/grammar/Hello.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u000fQ\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0007\f?\n\f\f\f",
    "\u000e\fB\u000b\f\u0003\r\u0003\r\u0007\rF\n\r\f\r\u000e\rI\u000b\r",
    "\u0003\u000e\u0006\u000eL\n\u000e\r\u000e\u000e\u000eM\u0003\u000e\u0003",
    "\u000e\u0002\u0002\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u0003\u0002\u0007\u0006\u0002\'\',-//11\u0003\u00022;\u0004",
    "\u0002C\\c|\u0005\u00022;C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "S\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002",
    "\u0002\u0005 \u0003\u0002\u0002\u0002\u0007&\u0003\u0002\u0002\u0002",
    "\t,\u0003\u0002\u0002\u0002\u000b/\u0003\u0002\u0002\u0002\r1\u0003",
    "\u0002\u0002\u0002\u000f4\u0003\u0002\u0002\u0002\u00116\u0003\u0002",
    "\u0002\u0002\u00138\u0003\u0002\u0002\u0002\u0015:\u0003\u0002\u0002",
    "\u0002\u0017<\u0003\u0002\u0002\u0002\u0019C\u0003\u0002\u0002\u0002",
    "\u001bK\u0003\u0002\u0002\u0002\u001d\u001e\u0007k\u0002\u0002\u001e",
    "\u001f\u0007h\u0002\u0002\u001f\u0004\u0003\u0002\u0002\u0002 !\u0007",
    "g\u0002\u0002!\"\u0007p\u0002\u0002\"#\u0007f\u0002\u0002#$\u0007k\u0002",
    "\u0002$%\u0007h\u0002\u0002%\u0006\u0003\u0002\u0002\u0002&\'\u0007",
    "r\u0002\u0002\'(\u0007t\u0002\u0002()\u0007k\u0002\u0002)*\u0007p\u0002",
    "\u0002*+\u0007v\u0002\u0002+\b\u0003\u0002\u0002\u0002,-\u0007?\u0002",
    "\u0002-.\u0007?\u0002\u0002.\n\u0003\u0002\u0002\u0002/0\u0007?\u0002",
    "\u00020\f\u0003\u0002\u0002\u000212\u0007#\u0002\u000223\u0007?\u0002",
    "\u00023\u000e\u0003\u0002\u0002\u000245\t\u0002\u0002\u00025\u0010\u0003",
    "\u0002\u0002\u000267\u0007=\u0002\u00027\u0012\u0003\u0002\u0002\u0002",
    "89\u0007*\u0002\u00029\u0014\u0003\u0002\u0002\u0002:;\u0007+\u0002",
    "\u0002;\u0016\u0003\u0002\u0002\u0002<@\t\u0003\u0002\u0002=?\t\u0003",
    "\u0002\u0002>=\u0003\u0002\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003",
    "\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A\u0018\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002CG\t\u0004\u0002\u0002DF\t\u0005\u0002",
    "\u0002ED\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002",
    "\u0002\u0002GH\u0003\u0002\u0002\u0002H\u001a\u0003\u0002\u0002\u0002",
    "IG\u0003\u0002\u0002\u0002JL\t\u0006\u0002\u0002KJ\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002",
    "\u0002\u0002NO\u0003\u0002\u0002\u0002OP\b\u000e\u0002\u0002P\u001c",
    "\u0003\u0002\u0002\u0002\u0006\u0002@GM\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class HelloLexer extends antlr4.Lexer {

    static grammarFileName = "Hello.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'if'", "'endif'", "'print'", "'=='", "'='", 
                         "'!='", null, "';'", "'('", "')'" ];
	static symbolicNames = [ null, "IF", "ENDIF", "PRINT", "EQUAL", "ASSIGN", 
                          "NOTEQUAL", "OP", "SEMICOLON", "LPAREN", "RPAREN", 
                          "INTEGER", "NAME", "WS" ];
	static ruleNames = [ "IF", "ENDIF", "PRINT", "EQUAL", "ASSIGN", "NOTEQUAL", 
                      "OP", "SEMICOLON", "LPAREN", "RPAREN", "INTEGER", 
                      "NAME", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

HelloLexer.EOF = antlr4.Token.EOF;
HelloLexer.IF = 1;
HelloLexer.ENDIF = 2;
HelloLexer.PRINT = 3;
HelloLexer.EQUAL = 4;
HelloLexer.ASSIGN = 5;
HelloLexer.NOTEQUAL = 6;
HelloLexer.OP = 7;
HelloLexer.SEMICOLON = 8;
HelloLexer.LPAREN = 9;
HelloLexer.RPAREN = 10;
HelloLexer.INTEGER = 11;
HelloLexer.NAME = 12;
HelloLexer.WS = 13;



