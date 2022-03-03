from rest_framework import serializers
from .models import Bdc

class BdcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bdc
        fields = ('id' ,'radical', 'bpr', 'montant','taux','ordre','date_emission','dureeE','date_paiment','dureeR','statut')