# Generated by Django 3.2.3 on 2021-11-07 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_curso_skill'),
    ]

    operations = [
        migrations.AddField(
            model_name='perfil',
            name='GitHub',
            field=models.CharField(default='', max_length=80),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='perfil',
            name='Linkedin',
            field=models.CharField(default='a', max_length=80),
            preserve_default=False,
        ),
    ]
