/*jshint esversion: 11 */
function typeString(cssRule) {
    switch (Number(cssRule.type)) {
    case 1: return 'STYLE_RULE';
    case 3: return 'IMPORT_RULE';
    case 4: return 'MEDIA_RULE';
    case 5: return 'FONT_FACE_RULE';
    case 6: return 'PAGE_RULE';
    case 7: return 'KEYFRAMES_RULE';
    case 8: return 'KEYFRAME_RULE';
    case 9: return 'reserved for future use';
    case 10: return 'NAMESPACE_RULE';
    case 11: return 'COUNTER_STYLE_RULE';
    case 12: return 'SUPPORTS_RULE';
    case 13: return 'DOCUMENT_RULE';
    case 14: return 'FONT_FEATURE_VALUES_RULE';
    case 15: return 'VIEWPORT_RULE';
    case 16: return 'REGION_STYLE_RULE';
    case 0: return 'UNKNOWN_RULE';
    case 2: return 'CHARSET_RULE';
    default: return cssRule.type;
    }
}

function getDocumentStyles() {
    let result = '';
    Array.from(document.styleSheets).forEach((styleSheet) => {
        if (styleSheet?.owner?.tagName === 'LINK') {
            result += '/*** BEGIN ' + owner.getAttribute('href') + ' ***/\n';
        } else {
            console.log(styleSheet);
        }
        Array.from(styleSheet.cssRules).forEach((cssRule) => {
            if (cssRule.type !== 1) {
                result += '    <' + typeString(cssRule) + '>\n';
            }
            result += cssRule.cssText.replace(/^/gm, '        ') + '\n';
            if (cssRule.type !== 1) {
                result += '    </' + typeString(cssRule) + '>\n';
            }
        });
        if (styleSheet?.owner?.tagName === 'LINK') {
            result += '/*** END ' + owner.getAttribute('href') + ' ***/\n';
        } else {
            console.log(styleSheet);
        }
    });
    return result;
}
