grammar Hello;
program: declaration* statement*;

// Parse rule for variable declarations
declaration: NAME NAME SEMICOLON;


// Parse rule for statements

statement: ifstmt | printstmt | assignstmt;

// Parse rule for if statements

ifstmt: IF LPAREN term EQUAL term RPAREN statement* ENDIF;

// Parse rule for print statements

printstmt: PRINT term SEMICOLON;

// Parse rule for assignment statements

assignstmt: NAME ASSIGN expression SEMICOLON;

// Parse rule for expressions

expression:
	term						# TermExpr
	| expression OP expression	# OpExpr
	| (LPAREN expression RPAREN	)			# ParenExpr;

// Parse rule for terms

term: identifier | integer;

// Parse rule for identifiers

identifier: NAME;

// Parse rule for numbers 

integer: INTEGER;

// Reserved Keywords //////////////////////////////

IF: 'if';
ENDIF: 'endif';
PRINT: 'print';

// Operators
EQUAL: '==';
ASSIGN: '=';
NOTEQUAL: '!=';
OP: '+' | '-' | '*' | '/' | '%';
// Semicolon and parentheses
SEMICOLON: ';';
LPAREN: '(';
RPAREN: ')';

// Integers
INTEGER: [0-9][0-9]*;

// Variable names
NAME: [a-zA-Z][a-zA-Z0-9]*;

// Ignore all white spaces 
WS: [ \t\r\n]+ -> skip;