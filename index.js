var splittedText = [1335200, 1860860, 823550, 1753410, 1443820, 1330250, 1161770, 1180320, 1568940, 1191420, 533540, 943700, 383080, 1896170, 1506600, 1717170, 957830, 950860, 1895780, 1582890, 1577420, 1628760, 1630290, 944110, 1173280, 1808120, 942140, 865570, 1254530, 333600, 1962890, 1177720, 1621540, 1057430, 1964360, 1760080, 1135680, 956490, 939600, 1181140, 1659940, 1260820, 1894600, 1554260, 1619750, 1931600, 1573060, 1446480, 1595290, 1264710];

function loopThroughSplittedText(splittedText) {
    for (var i = 0; i < splittedText.length; i++) {
        // for each iteration console.log a word
        (function (i) {
            // and make a pause after it
            setTimeout(function () {
                AddFreeLicense(splittedText[i]);
            })(i);
        }, 1000 * i);
    }
};

loopThroughSplittedText(splittedText);
