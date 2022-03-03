from django.db import models

# Create your models here.
class Bdc(models.Model):
    radical = models.CharField(max_length=200, null=True)
    bpr = models.CharField(max_length=200, null=True)
    montant = models.FloatField(null=True)
    taux = models.FloatField(null=True)
    ordre = models.CharField(max_length=200, null=True)
    date_emission = models.DateField(null=True)
    dureeE = models.CharField(max_length=200, null=True)
    date_paiment = models.DateField(null=True)
    dureeR = models.CharField(max_length=200, null=True)
    statut = models.CharField(max_length=200, null=True)