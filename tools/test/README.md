## Test

```shell
cd tools

# annotations for all API sets, from BO catalog
python backend.py MME

# annotations for EQUIPMENT API
python backend.py MME EQUIPMENT

# fundamental-ngx frontend for EQUIPMENT API
python frontend.py fundamental-ngx EQUIPMENT

# all frontends for cached annotations
python -m test.test_frontend

# single rfm call template
python -m test.test_rfmcall MME BAPI_PO_CREATE
```
