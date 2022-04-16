from rest_framework import serializers
from brands.models import Brand


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "name",
            "link",
            "description",
            "first_photo",
        )
        model = Brand
