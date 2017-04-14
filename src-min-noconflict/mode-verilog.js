-ace.define("ace/mode/verilog_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"),
        i = e("./text_highlight_rules").TextHighlightRules,
        s = function() {
            var e = "if|endif",
                t = "use",
                n = "near|with|around|mention",
                r = this.createKeywordMapper({
                    "support.function": n,
                    keyword: e,
                    "constant.language": t
                }, "identifier", !0);
            this.$rules = {
                start: [{
                    token: "comment",
                    regex: "//.*$"
                }, {
                    token: "comment.start",
                    regex: "/\\*",
                    next: [{
                        token: "comment.end",
                        regex: "\\*/",
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    }]
                }, {
                    token: "string",
                    regex: '".*?"'
                }, {
                    token: "string",
                    regex: "'.*?'"
                }, {
                    token: "constant.numeric",
                    regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                }, {
                    token: r,
                    regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                }, {
                    token: "keyword.operator",
                    regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                }, {
                    token: "paren.lparen",
                    regex: "[\\(]"
                }, {
                    token: "paren.rparen",
                    regex: "[\\)]"
                }, {
                    token: "text",
                    regex: "\\s+"
                }, {
                    token: "if.start"
                    regex: "IF"
                }, {
                    token: "if.end"
                    regex: "ENDIF"
                }]
            }, this.normalizeRules()
        };
    r.inherits(s, i), t.VerilogHighlightRules = s
}), ace.define("ace/mode/verilog", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/verilog_highlight_rules", "ace/range"], function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"),
        i = e("./text").Mode,
        s = e("./verilog_highlight_rules").VerilogHighlightRules,
        o = e("../range").Range,
        u = function() {
            this.HighlightRules = s, this.$behaviour = this.$defaultBehaviour
        };
    r.inherits(u, i),
        function() {
            this.lineCommentStart = "//", this.blockComment = {
                start: "/*",
                end: "*/"
            }, this.$id = "ace/mode/verilog"
        }.call(u.prototype), t.Mode = u
})
