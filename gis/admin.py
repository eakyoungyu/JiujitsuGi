from django.contrib import admin

y
from . import models


@admin.register(models.Gi)
class GiAdmin(admin.ModelAdmin):

    """Gi Admin Definition"""

    list_display = (
        "name",
        "brand",
        "link",
        "price",
        "photo",
    )
    search_fields = ("name",)
    ordering = ("name",)
