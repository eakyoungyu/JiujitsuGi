from django.urls import path
from . import views

app_name = "brands"

urlpatterns = [
    path("<int:pk>", views.BrandDetail.as_view(), name="detail"),
    path("brand/")
]
