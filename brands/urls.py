from django.urls import path, include
from . import views
from brands.api import views as api_views

app_name = "brands"

urlpatterns = [
    path("<int:pk>", views.BrandDetail.as_view(), name="detail"),
    path("api/", api_views.ListBrand.as_view()),
    path("api/<int:pk>/", api_views.DetailBrand.as_view()),
]
