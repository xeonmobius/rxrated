from rest_framework import serializers
from backend.models import Pharmacies


class PharmaciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pharmacies
        fields = '__all__'
