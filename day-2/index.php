<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SVG - Index</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>SVG - Exercices</h1>

<ul>
    <?php
    if ($handle = opendir('.')) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry !== "."
                && $entry !== ".."
                && $entry !== ".DS_Store"
                && $entry !== "index.php"
                && $entry !== "styles.css"
            ) {
                echo "<li><a href=\"$entry\n\">" . ucfirst("$entry\n") . "</li>";
            }
        }
        closedir($handle);
    }
    ?>
</ul>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
        integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
        crossorigin="anonymous"></script>
</body>
</html>