<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\OpenGraphService;

class IndexController extends AbstractController
{
    /**
     * @Route("/{page}", name="index")
     */
    public function index($page = 'default'): Response
    {
        $openGraphService = new OpenGraphService();
        $openGraphData = $openGraphService->getOpenGraphData($page);

        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
            'openGraphData' => $openGraphData,
        ]);
    }
}
