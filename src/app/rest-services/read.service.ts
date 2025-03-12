import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

// Types
import { CookBook } from '../custom-types/cookbook.type';
import { Recipe } from '../custom-types/recipe.type';
import { Tag } from '../custom-types/tag.type';
import { User } from '../custom-types/user.type';


@Injectable({
  providedIn: 'root'
})

export class ReadService {

  constructor(private readonly http: HttpClient) { }

  private readonly addrs = 'https://localhost:3000/';

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  // Mock observables for demonstration; replace these with actual API calls
  cookbooks$: Observable<CookBook[]> = of([
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        passwordHash: 'hashedpassword123',
        profileText: 'Just a regular guy who loves cooking!',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Favorite Recipes',
      isFavorite: true,
      isDeleteable: true,
      isPublic: true,
      description: 'A collection of my favorite recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Spaghetti Bolognese',
          user: {
            id: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'John',
            last_name: 'Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
            passwordHash: 'hashedpassword123',
            profileText: 'Just a regular guy who loves cooking!',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'healthy',
          nutri_score: 'A',
          ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
          steps: BigInt(5),
          preperationTime: BigInt(15),
          overallCookingTime: BigInt(30),
          recipeText: '1. Cook spaghetti. 2. Brown ground beef. 3. Add tomato sauce. 4. Add onions and garlic. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '1',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Vegetarian'
            },
            {
              id: '2',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Gluten-Free'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '4',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '5',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '6',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '7',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '8',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    },
    {
      id: '9',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      title: 'Healthy Recipes',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of healthy recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Chicken Curry',
          user: {
            id: '2',
            createdAt: new Date(),
            updatedAt: new Date(),
            first_name: 'Jane',
            last_name: 'Doe',
            username: 'janedoe',
            email: 'janedoe@example.com',
            passwordHash: 'hashedpassword456',
            profileText: 'Food enthusiast and recipe creator.',
            profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
          },
          isPublic: true,
          general_score: 'neutral',
          nutri_score: 'B',
          ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
          steps: BigInt(6),
          preperationTime: BigInt(20),
          overallCookingTime: BigInt(40),
          recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
          images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
          videoUrl: 'https://youtube.com/example-video',
          coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
          tags: [
            {
              id: '3',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Spicy'
            },
            {
              id: '4',
              createdAt: new Date(),
              updatedAt: new Date(),
              name: 'Dairy-Free'
            }
          ]
        }
      ]
    }
  ]);

  // Mock observables for demonstration; replace these with actual API calls
  tags$: Observable<Tag[]> = of([
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Vegetarian'
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Gluten-Free'
    },
    {
      id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Dessert'
    }
  ]);

  // Mock observables for demonstration; replace these with actual API calls
  users$: Observable<User[]> = of([
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      passwordHash: 'hashedpassword123',
      profileText: 'Just a regular guy who loves cooking!',
      profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      first_name: 'Jane',
      last_name: 'Doe',
      username: 'janedoe',
      email: 'janedoe@example.com',
      passwordHash: 'hashedpassword456',
      profileText: 'Food enthusiast and recipe creator.',
      profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
    },
    {
      id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
      first_name: 'Alice',
      last_name: 'Smith',
      username: 'alicesmith',
      email: 'alicesmith@example.com',
      passwordHash: 'hashedpassword789',
      profileText: 'Baking is my passion!',
      profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
    }
  ]);

  // Mock observables for demonstration; replace these with actual API calls
  recipes$: Observable<Recipe[]> = of([
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Spaghetti Bolognese',
      user: {
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        passwordHash: 'hashedpassword123',
        profileText: 'Just a regular guy who loves cooking!',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      isPublic: true,
      general_score: 'healthy',
      nutri_score: 'A',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
      steps: BigInt(5),
      preperationTime: BigInt(15),
      overallCookingTime: BigInt(30),
      recipeText: '1. Cook spaghetti. 2. Brown ground beef. 3. Add tomato sauce. 4. Add onions and garlic. 5. Simmer and serve.',
      images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
      videoUrl: 'https://youtube.com/example-video',
      coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
      tags: [
        {
          id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Vegetarian'
        },
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Gluten-Free'
        }
      ]
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Chicken Curry',
      user: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        passwordHash: 'hashedpassword456',
        profileText: 'Food enthusiast and recipe creator.',
        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'
      },
      isPublic: true,
      general_score: 'neutral',
      nutri_score: 'B',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic', 'ginger'],
      steps: BigInt(6),
      preperationTime: BigInt(20),
      overallCookingTime: BigInt(40),
      recipeText: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Add onions, garlic, and ginger. 5. Simmer and serve.',
      images: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
      videoUrl: 'https://youtube.com/example-video',
      coverImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...',
      tags: [
        {
          id: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Spicy'
        },
        {
          id: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Dairy-Free'
        }
      ]
    }
  ]);

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  readReadCookbooks() {
    /*return this.http.get<{ cookbooks: CookBook[] }>(this.addrs + 'cookbooks')
      .subscribe({
        next: result => result.cookbooks,
        error: err => console.log(err)
      });*/

    return this.cookbooks$;
  }

  

  readReadRecipes() {
    /*const result$ = this.http.get<{ recipes: Recipe[] }>(this.addrs + 'recipes');
    return result$.pipe(
      map((body: { recipes: Recipe[] }) => {
        return body.recipes;
      })
    );*/

    return this.recipes$;
  }

  readReadTags() {
    /*const result$ = this.http.get<{ tags: Tag[] }>(this.addrs + 'tags');
    return result$.pipe(
      map((body: { tags: Tag[] }) => {
        return body.tags;
      })
    );*/

    return this.tags$;
  }

  readReadUser() {
    /*const result$ = this.http.get<{ users: User[] }>(this.addrs + 'users');
    return result$.pipe(
      map((body: { users: User[] }) => {
        return body.users;
      })
    );*/

    return this.users$;
  }
}
