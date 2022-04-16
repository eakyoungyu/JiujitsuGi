from rest_framework import generics

from brands.models import Brand
from . import serializers


class ListBrand(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = serializers.BrandSerializer


class DetailBrand(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = serializers.BrandSerializer
