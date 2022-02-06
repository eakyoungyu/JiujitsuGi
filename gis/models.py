from django.db import models
from core import models as core_model


class Gi(core_model.TimeStampedModel):

    """Gi Model Definition"""

    name = models.CharField(max_length=150)
    brand = models.ForeignKey("brands.Brand", on_delete=models.CASCADE)
    link = models.URLField()
    price = models.IntegerField()
    photo = models.ImageField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} from {self.brand}"
