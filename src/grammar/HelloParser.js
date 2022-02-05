// Generated from ./src/grammar/Hello.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import HelloListener from './HelloListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000f[\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0007\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003",
    "\u0002\u0007\u0002\u001e\n\u0002\f\u0002\u000e\u0002!\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004*\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u00053\n\u0005\f\u0005",
    "\u000e\u00056\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bI\n\b\u0003\b\u0003\b\u0003\b\u0007\bN\n\b\f\b\u000e\bQ\u000b\b\u0003",
    "\t\u0003\t\u0005\tU\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0002\u0003\u000e\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0002\u0002\u0002X\u0002\u0019\u0003\u0002\u0002\u0002\u0004",
    "\"\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b+\u0003\u0002",
    "\u0002\u0002\n9\u0003\u0002\u0002\u0002\f=\u0003\u0002\u0002\u0002\u000e",
    "H\u0003\u0002\u0002\u0002\u0010T\u0003\u0002\u0002\u0002\u0012V\u0003",
    "\u0002\u0002\u0002\u0014X\u0003\u0002\u0002\u0002\u0016\u0018\u0005",
    "\u0004\u0003\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a\u001f\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001c\u001e\u0005\u0006\u0004\u0002\u001d\u001c\u0003",
    "\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003",
    "\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u0003\u0003\u0002",
    "\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\"#\u0007\u000e\u0002\u0002",
    "#$\u0007\u000e\u0002\u0002$%\u0007\n\u0002\u0002%\u0005\u0003\u0002",
    "\u0002\u0002&*\u0005\b\u0005\u0002\'*\u0005\n\u0006\u0002(*\u0005\f",
    "\u0007\u0002)&\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)(",
    "\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+,\u0007\u0003",
    "\u0002\u0002,-\u0007\u000b\u0002\u0002-.\u0005\u0010\t\u0002./\u0007",
    "\u0006\u0002\u0002/0\u0005\u0010\t\u000204\u0007\f\u0002\u000213\u0005",
    "\u0006\u0004\u000221\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u0002",
    "42\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000257\u0003\u0002\u0002",
    "\u000264\u0003\u0002\u0002\u000278\u0007\u0004\u0002\u00028\t\u0003",
    "\u0002\u0002\u00029:\u0007\u0005\u0002\u0002:;\u0005\u0010\t\u0002;",
    "<\u0007\n\u0002\u0002<\u000b\u0003\u0002\u0002\u0002=>\u0007\u000e\u0002",
    "\u0002>?\u0007\u0007\u0002\u0002?@\u0005\u000e\b\u0002@A\u0007\n\u0002",
    "\u0002A\r\u0003\u0002\u0002\u0002BC\b\b\u0001\u0002CI\u0005\u0010\t",
    "\u0002DE\u0007\u000b\u0002\u0002EF\u0005\u000e\b\u0002FG\u0007\f\u0002",
    "\u0002GI\u0003\u0002\u0002\u0002HB\u0003\u0002\u0002\u0002HD\u0003\u0002",
    "\u0002\u0002IO\u0003\u0002\u0002\u0002JK\f\u0004\u0002\u0002KL\u0007",
    "\t\u0002\u0002LN\u0005\u000e\b\u0005MJ\u0003\u0002\u0002\u0002NQ\u0003",
    "\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "P\u000f\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002RU\u0005\u0012",
    "\n\u0002SU\u0005\u0014\u000b\u0002TR\u0003\u0002\u0002\u0002TS\u0003",
    "\u0002\u0002\u0002U\u0011\u0003\u0002\u0002\u0002VW\u0007\u000e\u0002",
    "\u0002W\u0013\u0003\u0002\u0002\u0002XY\u0007\r\u0002\u0002Y\u0015\u0003",
    "\u0002\u0002\u0002\t\u0019\u001f)4HOT"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class HelloParser extends antlr4.Parser {

    static grammarFileName = "Hello.g4";
    static literalNames = [ null, "'if'", "'endif'", "'print'", "'=='", 
                            "'='", "'!='", null, "';'", "'('", "')'" ];
    static symbolicNames = [ null, "IF", "ENDIF", "PRINT", "EQUAL", "ASSIGN", 
                             "NOTEQUAL", "OP", "SEMICOLON", "LPAREN", "RPAREN", 
                             "INTEGER", "NAME", "WS" ];
    static ruleNames = [ "program", "declaration", "statement", "ifstmt", 
                         "printstmt", "assignstmt", "expression", "term", 
                         "identifier", "integer" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HelloParser.ruleNames;
        this.literalNames = HelloParser.literalNames;
        this.symbolicNames = HelloParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HelloParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 20;
	                this.declaration(); 
	            }
	            this.state = 25;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HelloParser.IF) | (1 << HelloParser.PRINT) | (1 << HelloParser.NAME))) !== 0)) {
	            this.state = 26;
	            this.statement();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HelloParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(HelloParser.NAME);
	        this.state = 33;
	        this.match(HelloParser.NAME);
	        this.state = 34;
	        this.match(HelloParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HelloParser.RULE_statement);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HelloParser.IF:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.ifstmt();
	            break;
	        case HelloParser.PRINT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.printstmt();
	            break;
	        case HelloParser.NAME:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.assignstmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifstmt() {
	    let localctx = new IfstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HelloParser.RULE_ifstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(HelloParser.IF);
	        this.state = 42;
	        this.match(HelloParser.LPAREN);
	        this.state = 43;
	        this.term();
	        this.state = 44;
	        this.match(HelloParser.EQUAL);
	        this.state = 45;
	        this.term();
	        this.state = 46;
	        this.match(HelloParser.RPAREN);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HelloParser.IF) | (1 << HelloParser.PRINT) | (1 << HelloParser.NAME))) !== 0)) {
	            this.state = 47;
	            this.statement();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this.match(HelloParser.ENDIF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printstmt() {
	    let localctx = new PrintstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HelloParser.RULE_printstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(HelloParser.PRINT);
	        this.state = 56;
	        this.term();
	        this.state = 57;
	        this.match(HelloParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignstmt() {
	    let localctx = new AssignstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HelloParser.RULE_assignstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(HelloParser.NAME);
	        this.state = 60;
	        this.match(HelloParser.ASSIGN);
	        this.state = 61;
	        this.expression(0);
	        this.state = 62;
	        this.match(HelloParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, HelloParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HelloParser.INTEGER:
	        case HelloParser.NAME:
	            localctx = new TermExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 65;
	            this.term();
	            break;
	        case HelloParser.LPAREN:
	            localctx = new ParenExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 66;
	            this.match(HelloParser.LPAREN);
	            this.state = 67;
	            this.expression(0);
	            this.state = 68;
	            this.match(HelloParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new OpExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_expression);
	                this.state = 72;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 73;
	                this.match(HelloParser.OP);
	                this.state = 74;
	                this.expression(3); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HelloParser.RULE_term);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HelloParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.identifier();
	            break;
	        case HelloParser.INTEGER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.integer();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HelloParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(HelloParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HelloParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(HelloParser.INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HelloParser.EOF = antlr4.Token.EOF;
HelloParser.IF = 1;
HelloParser.ENDIF = 2;
HelloParser.PRINT = 3;
HelloParser.EQUAL = 4;
HelloParser.ASSIGN = 5;
HelloParser.NOTEQUAL = 6;
HelloParser.OP = 7;
HelloParser.SEMICOLON = 8;
HelloParser.LPAREN = 9;
HelloParser.RPAREN = 10;
HelloParser.INTEGER = 11;
HelloParser.NAME = 12;
HelloParser.WS = 13;

HelloParser.RULE_program = 0;
HelloParser.RULE_declaration = 1;
HelloParser.RULE_statement = 2;
HelloParser.RULE_ifstmt = 3;
HelloParser.RULE_printstmt = 4;
HelloParser.RULE_assignstmt = 5;
HelloParser.RULE_expression = 6;
HelloParser.RULE_term = 7;
HelloParser.RULE_identifier = 8;
HelloParser.RULE_integer = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_program;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_declaration;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.NAME);
	    } else {
	        return this.getToken(HelloParser.NAME, i);
	    }
	};


	SEMICOLON() {
	    return this.getToken(HelloParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_statement;
    }

	ifstmt() {
	    return this.getTypedRuleContext(IfstmtContext,0);
	};

	printstmt() {
	    return this.getTypedRuleContext(PrintstmtContext,0);
	};

	assignstmt() {
	    return this.getTypedRuleContext(AssignstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitStatement(this);
		}
	}


}



class IfstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_ifstmt;
    }

	IF() {
	    return this.getToken(HelloParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(HelloParser.LPAREN, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	EQUAL() {
	    return this.getToken(HelloParser.EQUAL, 0);
	};

	RPAREN() {
	    return this.getToken(HelloParser.RPAREN, 0);
	};

	ENDIF() {
	    return this.getToken(HelloParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterIfstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitIfstmt(this);
		}
	}


}



class PrintstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_printstmt;
    }

	PRINT() {
	    return this.getToken(HelloParser.PRINT, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	SEMICOLON() {
	    return this.getToken(HelloParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterPrintstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitPrintstmt(this);
		}
	}


}



class AssignstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_assignstmt;
    }

	NAME() {
	    return this.getToken(HelloParser.NAME, 0);
	};

	ASSIGN() {
	    return this.getToken(HelloParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(HelloParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterAssignstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitAssignstmt(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TermExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterTermExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitTermExpr(this);
		}
	}


}

HelloParser.TermExprContext = TermExprContext;

class ParenExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(HelloParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(HelloParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterParenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitParenExpr(this);
		}
	}


}

HelloParser.ParenExprContext = ParenExprContext;

class OpExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP() {
	    return this.getToken(HelloParser.OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitOpExpr(this);
		}
	}


}

HelloParser.OpExprContext = OpExprContext;

class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_term;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitTerm(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_identifier;
    }

	NAME() {
	    return this.getToken(HelloParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_integer;
    }

	INTEGER() {
	    return this.getToken(HelloParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitInteger(this);
		}
	}


}




HelloParser.ProgramContext = ProgramContext; 
HelloParser.DeclarationContext = DeclarationContext; 
HelloParser.StatementContext = StatementContext; 
HelloParser.IfstmtContext = IfstmtContext; 
HelloParser.PrintstmtContext = PrintstmtContext; 
HelloParser.AssignstmtContext = AssignstmtContext; 
HelloParser.ExpressionContext = ExpressionContext; 
HelloParser.TermContext = TermContext; 
HelloParser.IdentifierContext = IdentifierContext; 
HelloParser.IntegerContext = IntegerContext; 
