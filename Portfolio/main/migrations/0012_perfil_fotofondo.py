# Generated by Django 3.2.3 on 2021-11-09 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_skill_foto'),
    ]

    operations = [
        migrations.AddField(
            model_name='perfil',
            name='FotoFondo',
            field=models.FileField(default='a', upload_to=''),
            preserve_default=False,
        ),
    ]
