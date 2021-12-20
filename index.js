
const TextFunctions = require('./formulas/handle/text');
const MathFunctions = require('./formulas/handle/math');
const TrigFunctions = require('./formulas/handle/trigonometry');
const LogicalFunctions = require('./formulas/handle/logical');
const EngFunctions = require('./formulas/handle/engineering');
const ReferenceFunctions = require('./formulas/handle/reference');
const InformationFunctions = require('./formulas/handle/information');
const StatisticalFunctions = require('./formulas/handle/statistical');
const DateFunctions = require('./formulas/handle/date');
const WebFunctions = require('./formulas/handle/web');
const FormulaError = require('./formulas/error');
const {FormulaHelpers, Address} = require('./formulas/helpers');
const {Prefix, Postfix, Infix, Operators} = require('./formulas/operators');
const Collection = require('./grammar/type/collection');



export const formulas = {
    TextFunctions,
    MathFunctions,
    TrigFunctions,
    LogicalFunctions,
    EngFunctions,
    ReferenceFunctions,
    InformationFunctions,
    StatisticalFunctions,
    DateFunctions,
    WebFunctions,
    FormulaError,
    FormulaHelpers,
    Address,
    Prefix,
    Postfix,
    Infix,
    Operators,
    Collection
}