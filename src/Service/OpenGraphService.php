<?php
namespace App\Service;

class OpenGraphService
{
    private $openGraphData = [
        'default' => [
            'title' => 'OG Title',
            'description' => 'OG Description',
            'image' => 'https://ogp.me/logo.png',
            'type' => 'website',
        ],
        'games' => [
            'title' => 'OG Title games',
            'description' => 'OG Description games',
            'image' => 'https://ogp.me/logo2.png',
            'type' => 'website games',
        ],
    ];

    public function __construct() {}

    public function getOpenGraphData($route) {
        return $this->openGraphData[$route];
    }
}