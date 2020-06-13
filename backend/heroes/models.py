from django.db import models


class Heroes(models.Model):
    name = models.CharField(max_length = 255, null = False)
    primary_attr = models.CharField(max_length = 255, null = False)
    attack_type = models.CharField(max_length = 255, null = False)
    roles = models.CharField(max_length = 255, null = False)

    def __str__(self):
        skeleton = "{} - {} - {} - {}"
        return skeleton.format(self.name, self.primary_attr, self.attack_type, self.roles)