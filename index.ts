import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("primeiro-teste-iac-bucket-pos", {
  bucket: "primeiro-teste-iac-bucket-pos",
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("segundo-teste-iac-ecr-pos", {
  name: "segundo-teste-iac-ecr-pos",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

export const bucketName = bucket.id;
