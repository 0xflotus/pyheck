window.BENCHMARK_DATA = {
  "lastUpdate": 1642717208627,
  "repoUrl": "https://github.com/kevinheavey/pyheck",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "24635973+kevinheavey@users.noreply.github.com",
            "name": "Kevin Heavey",
            "username": "kevinheavey"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "852828f9d0bd5e9272ef6c85076d105965e05ca7",
          "message": "typo",
          "timestamp": "2022-01-20T22:15:16Z",
          "tree_id": "06586d839d211960975f3d70469c09cd13f91275",
          "url": "https://github.com/kevinheavey/pyheck/commit/852828f9d0bd5e9272ef6c85076d105965e05ca7"
        },
        "date": 1642717207466,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_snake",
            "value": 689404.6557400854,
            "unit": "iter/sec",
            "range": "stddev: 4.799038659803475e-7",
            "extra": "mean: 1.4505269027034438 usec\nrounds: 27172"
          },
          {
            "name": "bench.py::test_inflection_underscore",
            "value": 126317.70065905651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014679744419290455",
            "extra": "mean: 7.916546887590164 usec\nrounds: 2474"
          },
          {
            "name": "bench.py::test_snake_long_sentence",
            "value": 13.791576890561437,
            "unit": "iter/sec",
            "range": "stddev: 0.000440695426472223",
            "extra": "mean: 72.508024857141 msec\nrounds: 14"
          },
          {
            "name": "bench.py::test_inflection_underscore_long_sentence",
            "value": 2.960989342056206,
            "unit": "iter/sec",
            "range": "stddev: 0.0015237433148579884",
            "extra": "mean: 337.7249576000054 msec\nrounds: 5"
          },
          {
            "name": "bench.py::test_inflection_underscore_many",
            "value": 1.3246371406644653,
            "unit": "iter/sec",
            "range": "stddev: 0.0058963303173930086",
            "extra": "mean: 754.9237215999995 msec\nrounds: 5"
          },
          {
            "name": "bench.py::test_snake_multiprocessing",
            "value": 9.75241691954211,
            "unit": "iter/sec",
            "range": "stddev: 0.0015624588595305059",
            "extra": "mean: 102.53868433333461 msec\nrounds: 6"
          },
          {
            "name": "bench.py::test_snake_many",
            "value": 16.683557413008,
            "unit": "iter/sec",
            "range": "stddev: 0.0017260304370603735",
            "extra": "mean: 59.93925487500107 msec\nrounds: 16"
          },
          {
            "name": "bench.py::test_inflection_underscore_multiprocessing",
            "value": 2.285068833941931,
            "unit": "iter/sec",
            "range": "stddev: 0.004699852105244945",
            "extra": "mean: 437.6235784000073 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}