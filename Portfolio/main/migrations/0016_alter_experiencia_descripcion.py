# Generated by Django 3.2.3 on 2022-01-31 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_alter_experiencia_descripcion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experiencia',
            name='Descripcion',
            field=models.TextField(max_length=800),
        ),
    ]