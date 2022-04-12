<?php
namespace App\Service;

class OpenGraphService
{
    private $openGraphData = [
        'default' => [
            'title' => '$POODL - The Future of DeFI',
            'description' => '$POODL is a token that is driven and supported solely by its community, with over 30,000 holders. Join early and enjoy the ride!',
            'image' => '/media/logos/logo.png',
            'type' => 'website games',
        ],
        'buy' => [
            'title' => '$POODL - Buy PoodlToken',
            'description' => 'Buy $POODL directly with FIAT, other cryptos or swap it on Pancakeswap.',
            'image' => '/media/logos/logo.png',
            'type' => 'website games',
        ],
        'team' => [
            'title' => '$POODL - Team',
            'description' => 'Learn about the team behind the project and get the contact for the right person you need.',
            'image' => '/media/logos/logo.png',
            'type' => 'website games',
        ],
        'games' => [
            'title' => '$POODL - Games',
            'description' => 'Check out our augmented reality APP to see your 3D POODL NFT through your phones camera.',
            'image' => '/media/logos/logo.png',
            'type' => 'website games',
        ],
        'charity' => [
            'title' => '$POODL - Charity',
            'description' => 'Charity is built in to our tokenomics. Learn about our partneres where our donations are sent to.',
            'image' => '/media/logos/logo.png',
            'type' => 'website games',
        ],
        'whitepaper' => [
            'title' => '$POODL - Whitepaper',
            'description' => 'All the information about the project itself. History, tokenomics, where are we heading?',
            'image' => '/media/logos/logo.png',
            'type' => 'website games',
        ],
    ];

    public function __construct() {}

    public function getOpenGraphData($route) {
        if (array_key_exists($route, $this->openGraphData)) {
            return $this->openGraphData[$route];
        }

        return $this->openGraphData['default'];
    }
}