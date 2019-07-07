<?php

$token_news = $_POST['select-topic-news'];
$token_lifestyle = $_POST['select-topic-lifestyle'];
$token_music = $_POST['select-topic-music'];

define(
    'WEBROOT', 
    'v22017125295056992.happysrv.de/mein-senda'
);

$suffix = time();

//exec('node read_rss ' . $token_news . ' ' . $token_lifestyle . ' ' . $token_music);

$command = 
    'node backend/merge_audio ' . $token_news . ' ' . $token_music . ' ' . $token_lifestyle . ' ' . $suffix;

exec($command, $output);

// var_dump($output);

// Bug: New file isn't delivered on every request. Maybe a caching problem?
header('Location: https://' . WEBROOT . '/output/mein_senda_' . $suffix . '.mp3');

?>