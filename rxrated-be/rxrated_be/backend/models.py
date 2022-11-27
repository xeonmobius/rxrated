from django.db import models

# Create your models here.
class Pharmacies(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    accreditation_number = models.IntegerField(default=000000)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    province = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=6)
    phone = models.IntegerField(default=5555555555)
    fax = models.IntegerField(default=5555555555)
    