<?php
include('../backend/connection.php');

$news_headline = $_POST['headline'];
$news_text = $_POST['text'];
$news_author = $_POST['author'];
$news_date = date('Y-m-d H:i:s');

if (empty($news_headline) || empty($news_text) || empty($news_author)) {
    $response['error'] = 'Please fill in all fields';
    echo json_encode($response);
    exit();
}

$add_news = $mysqli->prepare('INSERT INTO news (headline, text, date, author) VALUES (?, ?, ?, ?)');
$add_news->bind_param('ssss', $news_headline, $news_text, $news_date, $news_author);
$add_news->execute();
$add_news->close();

$response['success'] = 'News added';