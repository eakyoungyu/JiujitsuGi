from django.contrib import admin
from . import models


@admin.register(models.Brand)
class BrandAdmin(admin.ModelAdmin):

    """Brand Admin Definition"""

    list_display = (
        "name",
        "link",
    )

    search_fields = ("name",)
    ordering = ("name",)
