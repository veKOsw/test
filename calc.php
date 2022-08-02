<?php
$requestPayload = file_get_contents("php://input");
$data = json_decode($requestPayload, true);

$sumAdd = $data['sumAdd'];
$percent = $data['percent'];
$term = $data['term'];
$daysY = date('L') ? 366 : 365;
$sum = $data['sum'];
$date = $data['startDate'];
$daysN = date('t', strtotime($date));

static $sumF = 0;
static $sumN = 0;


$sumF = $sumF + $sum;
for ($i = 0; $i < $term; $i++) {
    $sumN += $sumF + ($sumF + $sumAdd) * $daysN * round(($percent / $daysY), 4);
    $sumF += $sumAdd;
}
echo $sumN - $sumF;
