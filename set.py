my_set = {1, 'Lassie', False, ('jan', 'feb', 'mar')}
my_empty_set = set()

for element in my_set:
    print(element)

my_set.add('NY')


my_set = {1, 'Lassie', False, ('jan', 'feb', 'mar')}
cities = {'NY', 'San Francisco', 'Las Vegas'}
my_set.update(cities)

my_set.remove('Lassie')
my_set.discard('Garfield')

print(my_set)

dog = {
    'name': 'Hachikō',
    'age': 11,
    'color': ['golden', 'brown'],
    'breed': 'akita',
    'favorite place': 'train station'
}

empty_dic = {}
