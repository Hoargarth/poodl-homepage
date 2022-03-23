<?php
namespace App\Service;

class OpenGraphService
{
    private $openGraphData = [
        'default' => [
            'title' => '$POODL - The Future of DeFI',
            'description' => 'OG Description',
            'image' => 'https://ogp.me/logo.png',
            'type' => 'website',
        ],
        'buy' => [
            'title' => '$POODL - Buy PoodlToken',
            'description' => 'OG Description games',
            'image' => 'https://ogp.me/logo2.png',
            'type' => 'website games',
        ],
        'team' => [
            'title' => '$POODL - Team',
            'description' => 'OG Description games',
            'image' => 'https://ogp.me/logo2.png',
            'type' => 'website games',
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