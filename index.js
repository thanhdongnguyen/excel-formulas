
const TextFunctions = require('./formulas/functions/text');
const MathFunctions = require('./formulas/functions/math');
const TrigFunctions = require('./formulas/functions/trigonometry');
const LogicalFunctions = require('./formulas/functions/logical');
const EngFunctions = require('./formulas/functions/engineering');
const ReferenceFunctions = require('./formulas/functions/reference');
const InformationFunctions = require('./formulas/functions/information');
const StatisticalFunctions = require('./formulas/functions/statistical');
const DateFunctions = require('./formulas/functions/date');
const WebFunctions = require('./formulas/functions/web');
const FormulaError = require('./formulas/error');
const {FormulaHelpers, Address} = require('./formulas/helpers');
const {Prefix, Postfix, Infix, Operators} = require('./formulas/operators');
const Collection = require('./grammar/type/collection');



const formulas = {
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

module.exports = formulas;