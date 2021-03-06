# Generated by Django 4.0.2 on 2022-03-20 06:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0004_remove_brand_gis'),
    ]

    operations = [
        migrations.AddField(
            model_name='brand',
            name='description',
            field=models.CharField(default=models.CharField(max_length=100), max_length=400),
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('caption', models.CharField(max_length=80)),
                ('file', models.ImageField(upload_to='brand_photos')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='brands.brand')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
