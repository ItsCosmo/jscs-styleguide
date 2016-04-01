import { disallowAnonymousFunctions } from "./rules/disallowAnonymousFunctions"
import { disallowArrayDestructuringReturn } from "./rules/disallowArrayDestructuringReturn"
import { disallowArrowFunctions } from "./rules/disallowArrowFunctions"
import { disallowCapitalizedComments } from "./rules/disallowCapitalizedComments"
import { disallowCommaBeforeLineBreak } from "./rules/disallowCommaBeforeLineBreak"
import { disallowCurlyBraces } from "./rules/disallowCurlyBraces"
import { disallowDanglingUnderscores } from "./rules/disallowDanglingUnderscores"
import { disallowEmptyBlocks } from "./rules/disallowEmptyBlocks"
import { disallowFunctionDeclarations } from "./rules/disallowFunctionDeclarations"
import { disallowIdenticalDestructuringNames } from "./rules/disallowIdenticalDestructuringNames"
import { disallowIdentifierNames } from "./rules/disallowIdentifierNames"
import { disallowImplicitTypeConversion } from "./rules/disallowImplicitTypeConversion"
import { disallowKeywords } from "./rules/disallowKeywords"
import { disallowKeywordsInComments } from "./rules/disallowKeywordsInComments"
import { disallowKeywordsOnNewLine } from "./rules/disallowKeywordsOnNewLine"
import { disallowMixedSpacesAndTabs } from "./rules/disallowMixedSpacesAndTabs"
import { disallowMultiLineTernary } from "./rules/disallowMultiLineTernary"
import { disallowMultipleLineBreaks } from "./rules/disallowMultipleLineBreaks"
import { disallowMultipleLineStrings } from "./rules/disallowMultipleLineStrings"
import { disallowMultipleSpaces } from "./rules/disallowMultipleSpaces"
import { disallowMultipleVarDecl } from "./rules/disallowMultipleVarDecl"
import { disallowNamedUnassignedFunctions } from "./rules/disallowNamedUnassignedFunctions"
import { disallowNestedTernaries } from "./rules/disallowNestedTernaries"
import { disallowNewlineBeforeBlockStatements } from "./rules/disallowNewlineBeforeBlockStatements"
import { disallowNotOperatorsInConditionals } from "./rules/disallowNotOperatorsInConditionals"
import { disallowSpaceAfterObjectKeys } from "./rules/disallowSpaceAfterObjectKeys"
import { disallowSpaceAfterPrefixUnaryOperators } from "./rules/disallowSpaceAfterPrefixUnaryOperators"
import { disallowSpacesInAnonymousFunctionExpression } from "./rules/disallowSpacesInAnonymousFunctionExpression"
import { disallowSpacesInCallExpression } from "./rules/disallowSpacesInCallExpression"
import { disallowSpacesInFunction } from "./rules/disallowSpacesInFunction"
import { disallowSpacesInsideArrayBrackets } from "./rules/disallowSpacesInsideArrayBrackets"
import { disallowSpacesInsideObjectBrackets } from "./rules/disallowSpacesInsideObjectBrackets"
import { disallowSpacesInsideParentheses } from "./rules/disallowSpacesInsideParentheses"
import { disallowTrailingComma } from "./rules/disallowTrailingComma"
import { disallowYodaConditions } from "./rules/disallowYodaConditions"
import { maximumLineLength } from "./rules/maximumLineLength"
import { requireCamelCaseOrUpperCaseIdentifiers } from "./rules/requireCamelCaseOrUpperCaseIdentifiers"
import { requireCapitalizedConstructors } from "./rules/requireCapitalizedConstructors"
import { requireCommaBeforeLineBreak } from "./rules/requireCommaBeforeLineBreak"
import { requireCurlyBraces } from "./rules/requireCurlyBraces"
import { requireDollarBeforejQueryAssignment } from "./rules/requireDollarBeforejQueryAssignment"
import { requireLineFeedAtFileEnd } from "./rules/requireLineFeedAtFileEnd"
import { requireMultipleVarDecl } from "./rules/requireMultipleVarDecl"
import { requireOperatorBeforeLineBreak } from "./rules/requireOperatorBeforeLineBreak"
import { requireSpaceAfterBinaryOperators } from "./rules/requireSpaceAfterBinaryOperators"
import { requireSpaceAfterKeywords } from "./rules/requireSpaceAfterKeywords"
import { requireSpaceBeforeBinaryOperators } from "./rules/requireSpaceBeforeBinaryOperators"
import { requireSpaceBeforeBlockStatements } from "./rules/requireSpaceBeforeBlockStatements"
import { requireSpaceBeforeKeywords } from "./rules/requireSpaceBeforeKeywords"
import { requireSpaceBeforeObjectValues } from "./rules/requireSpaceBeforeObjectValues"
import { requireSpaceBetweenArguments } from "./rules/requireSpaceBetweenArguments"
import { requireSpacesInConditionalExpression } from "./rules/requireSpacesInConditionalExpression"
import { requireSpacesInForStatement } from "./rules/requireSpacesInForStatement"
import { requireSpacesInFunctionExpression } from "./rules/requireSpacesInFunctionExpression"
import { validateIndentation } from "./rules/validateIndentation"
import { validateParameterSeparator } from "./rules/validateParameterSeparator"
import { validateQuoteMarks } from "./rules/validateQuoteMarks"
export default {
disallowAnonymousFunctions,
disallowArrayDestructuringReturn,
disallowArrowFunctions,
disallowCapitalizedComments,
disallowCommaBeforeLineBreak,
disallowCurlyBraces,
disallowDanglingUnderscores,
disallowEmptyBlocks,
disallowFunctionDeclarations,
disallowIdenticalDestructuringNames,
disallowIdentifierNames,
disallowImplicitTypeConversion,
disallowKeywords,
disallowKeywordsInComments,
disallowKeywordsOnNewLine,
disallowMixedSpacesAndTabs,
disallowMultiLineTernary,
disallowMultipleLineBreaks,
disallowMultipleLineStrings,
disallowMultipleSpaces,
disallowMultipleVarDecl,
disallowNamedUnassignedFunctions,
disallowNestedTernaries,
disallowNewlineBeforeBlockStatements,
disallowNotOperatorsInConditionals,
disallowSpaceAfterObjectKeys,
disallowSpaceAfterPrefixUnaryOperators,
disallowSpacesInAnonymousFunctionExpression,
disallowSpacesInCallExpression,
disallowSpacesInFunction,
disallowSpacesInsideArrayBrackets,
disallowSpacesInsideObjectBrackets,
disallowSpacesInsideParentheses,
disallowTrailingComma,
disallowYodaConditions,
maximumLineLength,
requireCamelCaseOrUpperCaseIdentifiers,
requireCapitalizedConstructors,
requireCommaBeforeLineBreak,
requireCurlyBraces,
requireDollarBeforejQueryAssignment,
requireLineFeedAtFileEnd,
requireMultipleVarDecl,
requireOperatorBeforeLineBreak,
requireSpaceAfterBinaryOperators,
requireSpaceAfterKeywords,
requireSpaceBeforeBinaryOperators,
requireSpaceBeforeBlockStatements,
requireSpaceBeforeKeywords,
requireSpaceBeforeObjectValues,
requireSpaceBetweenArguments,
requireSpacesInConditionalExpression,
requireSpacesInForStatement,
requireSpacesInFunctionExpression,
validateIndentation,
validateParameterSeparator,
validateQuoteMarks,
}