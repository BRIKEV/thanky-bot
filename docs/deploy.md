# Deploy

We are using Google cloud run to deploy this bot. We are also using Github actions. In order to create the Dockerfile and the Github action script we followed this [blog post](https://cloud.google.com/community/tutorials/cicd-cloud-run-github-actions).

## Setup service account

```
gcloud iam service-accounts create thanky-ci \
  --description="Cloud Run deploy account" \
  --display-name="Thanky-Cloud-Run-Deploy"

gcloud projects add-iam-policy-binding thanky-<ID> \
  --member=serviceAccount:thanky-ci@thanky-<ID>.iam.gserviceaccount.com \
  --role=roles/run.admin

gcloud projects add-iam-policy-binding thanky-<ID> \
  --member=serviceAccount:thanky-ci@thanky-<ID>.iam.gserviceaccount.com \
  --role=roles/storage.admin

gcloud projects add-iam-policy-binding thanky-<ID> \
  --member=serviceAccount:thanky-ci@thanky-<ID>.iam.gserviceaccount.com \
  --role=roles/iam.serviceAccountUser

gcloud iam service-accounts keys create key.json \
    --iam-account thanky-ci@thanky-382521.iam.gserviceaccount.com
```

