var strings = ["Hello", "345678", "101"];
var validators = {};
validators["Zip code"] = new Validation.ZipCodeValidator();
validators["Letters"] = new Validation.LettersOnlyValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\"-" + (validators[name_1].isAcceptable(s) ? "matches " : "does not matches ") + name_1);
    }
}
