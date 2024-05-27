<?php
$folder = './New Folder';
chdir($folder);

$filenames = scandir('./');

function pascalCase($string) {
    $string = str_replace('-', ' ', $string);
    $string = ucwords($string);
    return str_replace(' ', '', $string);
}

foreach ($filenames as $filename) {
    if (is_file($filename)) {
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        $fileBase = pathinfo($filename, PATHINFO_FILENAME);
        $tsFilename = $fileBase . '.ts';

        if (file_exists($tsFilename)) {
            continue;
        }

        $pascalCase = pascalCase($fileBase);

        $tsFile = "import { Component } from '@angular/core';

@Component({
  selector: 'mem-icon-$fileBase',
  templateUrl: './$fileBase.html',
  styleUrls: []
})
export class MemIcon{$pascalCase}Component {}
";
        file_put_contents($tsFilename, $tsFile);
    }
}
