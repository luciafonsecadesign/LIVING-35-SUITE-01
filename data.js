var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5517925558228391,
        "pitch": 0.1363301999233535,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.8625431077300316,
          "pitch": 0.23366267995343293,
          "rotation": 5.497787143782138,
          "target": "2-bao"
        },
        {
          "yaw": 1.6744678313501584,
          "pitch": 0.31741801301019734,
          "rotation": 0.7853981633974483,
          "target": "1-cama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cama",
      "name": "Cama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03222146311374274,
        "pitch": 0.4577511524189557,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -2.6997276122446543,
          "pitch": 0.28534215543378494,
          "rotation": 0.7853981633974483,
          "target": "2-bao"
        },
        {
          "yaw": 2.31532088333112,
          "pitch": 0.12618598233568967,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5948673486777043,
        "pitch": 0.2159371400543293,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -1.5222586488171252,
          "pitch": 0.28982163714676723,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SUITE 01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
