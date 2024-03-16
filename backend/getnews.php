<?php
include('../backend/connection.php');

$get_news = $mysqli->prepare('SELECT * FROM news');
$get_news->execute();
$get_news->store_result();
if ($get_news->num_rows === 0) {
    $response['error'] = 'No news found';
    echo json_encode($response);
    exit();
}
$get_news->bind_result($id, $headline, $text, $date, $author);
$get_news->fetch();
while ($get_news->fetch()) {
    $article = [
        'id' => $id,
        'headline' => $headline,
        'text' => $text,
        'date' => $date,
        'author' => $author
    ];
    $articles[] = $article;
}
$response['news'] = $articles;
echo json_encode($response);