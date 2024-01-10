from django.db import models

# Create your models here.
class Notes(models.Model):
    body=models.TextField(blank=True,null=True)
    created=models.DateTimeField(auto_now=True)
    updated=models.DateTimeField(auto_now_add=True)

