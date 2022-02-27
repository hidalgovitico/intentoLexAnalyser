using Antlr4.Runtime;

namespace PruebaAntlrCSharp;

public class SpreadsheetVisitor : SpreadsheetBaseVisitor<object?>
{
    // declare a dictionary to hold the values of the cells
    // public readonly Dictionary<string, object> values = new();

    // declare a dictionary to hold the types of the cells
    public readonly Dictionary<string, string> types = new();
    private SpreadsheetParser parser;

    public SpreadsheetVisitor(SpreadsheetParser parser)
    {
        this.parser = parser;
    }

    private string getExpressionType(SpreadsheetParser.ExpressionContext context)
    {
        return context switch
        {
            SpreadsheetParser.TermExprContext termExprContext => getExpressionType(termExprContext).Trim(),
            SpreadsheetParser.OpExprContext opExprContext => getExpressionType(opExprContext).Trim(),
            SpreadsheetParser.ParenExprContext parenExprContext => getExpressionType(parenExprContext).Trim(),
            _ => throw new Exception("Unknown expression type")
        };
    }

    private static readonly bool shouldThrow = false;

    private void executeException(Exception ex)
    {
        Console.WriteLine(ex.Message);
        // if shouldThrow is true, throw the exception
        if (shouldThrow)
        {
            throw ex;
        }
    }

    private string getExpressionType(SpreadsheetParser.OpExprContext context)
    {
        var leftType = getExpressionType(context.expression(0));
        var rightType = getExpressionType(context.expression(1));
        var op = context.OP(0).GetText(); //TODO: implement loop to get all operators
        
        // if types are not the same, log information with the error message indicating the type mismatch and the line number
        if (leftType.CompareTo(rightType) != 0)
        {
            executeException(new Exception($"Type mismatch: {leftType} and {rightType} at line {context.Start.Line}"));
            return "";
        }
        if(op == "==" || op == "!=" || op == "<" || op == ">" || op == "<=" || op == ">=")
        {
            return "bool";
        }

        return leftType;
    }

    private string getExpressionType(SpreadsheetParser.ParenExprContext context)
    {
        return getExpressionType(context.expression()).Trim();
    }

    private string getExpressionType(SpreadsheetParser.TermExprContext context)
    {
        return getTermType(context.term()).Trim();
    }

    private string getIdentifierType(SpreadsheetParser.IdentifierContext context)
    {
        var name = context.GetText();
        if (types.ContainsKey(name))
            return types[context.GetText()].Trim();
        else
        {
            executeException(new Exception($"Unknown identifier: {name} at line {context.Start.Line}"));
            return "unknown";
        }
    }

    private string getTermType(SpreadsheetParser.TermContext context)
    {
        if (context.identifier() is { } identifier)
        {
            return getIdentifierType(identifier);
        }
        else if (context.INTEGER() is { })
        {
            return "int";
        }
        else if (context.STRING() is { })
        {
            return "string";
        }
        else if (context.BOOLEAN() is { })
        {
            return "bool";
        }
        else
        {
            throw new Exception("Unknown term type");
        }
    }

    public override object? VisitAssignstmt(SpreadsheetParser.AssignstmtContext context)
    {
        // debug info
        var text = context.GetText();
        var name = context.NAME().GetText();
        var valueType = getExpressionType(context.expression());
        // var value = VisitExpression(context.expression());
        // determine if the value is of the type of the cell
        if (types.ContainsKey(name))
        {
            if (types[name] != valueType)
            {
                // if the type is not the same, throw an exception with the name of the cell, the type of the cell and value, and the line number
                // context.start.
                executeException(new Exception(
                    $"Type mismatch in {name} ({types[name]}) = {context.expression().GetText()} ({valueType}) at line {context.Start.Line}"));
            }
        }
        else
        {
            types[name] = valueType;
        }

        // store the value in the dictionary
        // values[name] = value;
        return valueType;
    }

    private string GetType(object value) =>
        value switch
        {
            int => "int",
            bool => "bool",
            string => "string",
            _ => throw new Exception($"Unknown type {value.GetType().Name}")
        };

    public override object? VisitExpression(SpreadsheetParser.ExpressionContext context)
    {
        // debug expression info
        var text = context.GetText();

        return context switch
        {
            SpreadsheetParser.TermExprContext termExprContext => VisitTermExpr(termExprContext),
            SpreadsheetParser.OpExprContext opExprContext => VisitOpExpr(opExprContext),
            SpreadsheetParser.ParenExprContext parenExprContext => VisitParenExpr(parenExprContext),
            // if the expression cannot be parsed, throw an exception with the error message and the line number
            _ => throw new Exception($"Unknown expression type {text} at line {context.Start.Line}")
        };
    }

    public override object? VisitOpExpr(SpreadsheetParser.OpExprContext context)
    {
        var leftExpr = context.expression(0);
        var rightExpr = context.expression(1);
        var left = VisitExpression(leftExpr);
        var right = VisitExpression(rightExpr);
        var op = context.OP(0).GetText(); //TODO: implement all
        // debug info
        var text = context.GetText();
        var textLeft = leftExpr.GetText();
        var textRight = rightExpr.GetText();
        // get type of the operands
        var leftType = getExpressionType(leftExpr);
        var rightType =  getExpressionType(rightExpr);
        // check if the operands are of the same type
        if (leftType != rightType)
        {
            executeException(new Exception($"Operands of different types: {leftType} and {rightType}"));
            return null;
        }

        // if operand is EQUAL then return the result of the operation
        if (op == "=")
        {
            return left == right;
        }

        // if operands are of type int, perform the operation
        if (leftType == "int")
        {
            // return op switch
            // {
            //     "+" => (int) left + (int) right,
            //     "-" => (int) left - (int) right,
            //     "*" => (int) left * (int) right,
            //     "/" => (int) left / (int) right,
            //     _ => throw new Exception("Unknown operator")
            // };
        }
        else
        {
            // // if operands are strings, concatenate them
            // return op switch
            // {
            //     "+" => (string) left + (string) right,
            //     _ => throw new Exception("Unknown operator")
            // };
        }

        return null;
    }

    public override object? VisitTermExpr(SpreadsheetParser.TermExprContext context)
    {
        // debug expression info
        var text = context.GetText();

        var term = context.term();
        return VisitTerm(term);
    }

    public override object? VisitTerm(SpreadsheetParser.TermContext context)
    {
        // debug expression info
        var text = context.GetText();
        if (context.identifier() is { } identifier)
        {
            return VisitIdentifier(identifier);
        }
        else if (context.INTEGER() is { } integer)
        {
            return int.Parse(integer.GetText());
        }
        else if (context.STRING() is { } stringLiteral)
        {
            return stringLiteral.GetText().Substring(1, stringLiteral.GetText().Length - 2);
        }
        else if (context.BOOLEAN() is { } boolLiteral)
        {
            return bool.Parse(boolLiteral.GetText());
        }
        else
        {
            throw new Exception("Unknown term type");
        }
    }

    public override object? VisitIfstmt(SpreadsheetParser.IfstmtContext context)
    {
        // var condition = VisitExpression(context.expression());
        var text = context.GetText();
        var expr = VisitExpression(context.expression());
        var exprType = getExpressionType(context.expression());
        var statements = context.statement();
        return base.VisitIfstmt(context);
    }

    public override object? VisitIdentifier(SpreadsheetParser.IdentifierContext context)
    {
        // return values[context.NAME().GetText()];
        return null;
    }

    public override object? VisitParenExpr(SpreadsheetParser.ParenExprContext context)
    {
        var expr = context.expression();
        return VisitExpression(expr);
    }

    public override object? VisitDeclaration(SpreadsheetParser.DeclarationContext context)
    {
        var text = context.GetText();
        // if assign exists, get name from assign, else get name from context
        var assign = context.assignstmt();
        var name = assign is { } ? assign.NAME().GetText() : context.NAME().GetText();
        var type = context.type().GetText();
        // save the type 
        types[name] = type;
        // if assignstmt is not null, visit it and store the value in the dictionary
        // if not, initialize the value
        if (assign != null)
        {
            VisitAssignstmt(assign);
        }
        else
        {
            // values[name] = type switch
            // {
            //     // if the type is int, initialize the value to 0
            //     "int" => 0,
            //     // if the type is string, initialize the value to ""
            //     "string" => "",
            //     // if the type is boolean, initialize the value to false
            //     "bool" => false,
            //     // if the type is not int, string or boolean, throw an exception
            //     _ => throw new Exception("Unknown type"),
            // };
        }

        return null;
    }
}