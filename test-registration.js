#!/usr/bin/env node

/**
 * Registration Test Script
 * 
 * This script tests the fitbody-api registration endpoint
 * to verify it's working correctly.
 */

const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:1200/api'; // Change to your server URL
const TEST_USERS = [
  {
    username: 'testuser1',
    password: 'password123',
    full_name: 'Test User One',
    email: 'testuser1@example.com',
    phone: '1234567890',
    level: 'beginner'
  },
  {
    username: 'testuser2',
    password: 'password123',
    full_name: 'Test User Two',
    email: 'testuser2@example.com',
    level: 'intermediate'
  },
  {
    username: 'testuser3',
    password: 'password123',
    full_name: 'Test User Three',
    phone: '0987654321',
    level: 'advanced'
  }
];

async function testRegistration() {
  console.log('🧪 Testing FitBody API Registration...\n');
  
  // Test 1: Invalid request (missing required fields)
  console.log('1️⃣ Testing invalid request (missing fields)...');
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      username: 'test'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('❌ Unexpected success with incomplete data');
  } catch (error) {
    if (error.response?.status === 400) {
      console.log('✅ Correctly rejected incomplete request:', error.response.data.message);
    } else {
      console.log('❌ Unexpected error:', error.response?.data || error.message);
    }
  }
  
  // Test 2: Invalid username (too short)
  console.log('\n2️⃣ Testing invalid username (too short)...');
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      username: 'test',
      password: 'password123',
      full_name: 'Test User'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('❌ Unexpected success with short username');
  } catch (error) {
    if (error.response?.status === 400) {
      console.log('✅ Correctly rejected short username:', error.response.data.message);
    } else {
      console.log('❌ Unexpected error:', error.response?.data || error.message);
    }
  }
  
  // Test 3: Valid registrations
  console.log('\n3️⃣ Testing valid user registrations...');
  for (const user of TEST_USERS) {
    console.log(`\n   Testing registration for ${user.username}...`);
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, user, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.status === 200 && response.data.statusCode === 200) {
        console.log(`   ✅ ${user.username}: Registration successful`);
        console.log(`      User ID: ${response.data.data._id}`);
        console.log(`      Full Name: ${response.data.data.full_name}`);
        console.log(`      Email: ${response.data.data.email || 'Not provided'}`);
        console.log(`      Phone: ${response.data.data.phone || 'Not provided'}`);
        console.log(`      Level: ${response.data.data.level}`);
        
        // Test immediate login with new account
        console.log(`   🔐 Testing login with new account...`);
        try {
          const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
            username: user.username,
            password: user.password
          }, {
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (loginResponse.status === 200 && loginResponse.data.statusCode === 200) {
            console.log(`   ✅ ${user.username}: Login after registration successful`);
          } else {
            console.log(`   ❌ ${user.username}: Login after registration failed`);
          }
        } catch (loginError) {
          console.log(`   ❌ ${user.username}: Login error:`, loginError.response?.data?.message || loginError.message);
        }
        
      } else {
        console.log(`   ❌ ${user.username}: Unexpected response format`);
        console.log(`      Response:`, response.data);
      }
    } catch (error) {
      console.log(`   ❌ ${user.username}: Registration failed`);
      console.log(`      Error:`, error.response?.data || error.message);
    }
  }
  
  // Test 4: Duplicate username
  console.log('\n4️⃣ Testing duplicate username...');
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, TEST_USERS[0], {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('❌ Unexpected success with duplicate username');
  } catch (error) {
    if (error.response?.status === 400 && error.response.data.message.includes('tồn tại')) {
      console.log('✅ Correctly rejected duplicate username:', error.response.data.message);
    } else {
      console.log('❌ Unexpected error:', error.response?.data || error.message);
    }
  }
  
  // Test 5: Invalid email format
  console.log('\n5️⃣ Testing invalid email format...');
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      username: 'testuser99',
      password: 'password123',
      full_name: 'Test User',
      email: 'invalid-email'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('❌ Unexpected success with invalid email');
  } catch (error) {
    if (error.response?.status === 400) {
      console.log('✅ Correctly rejected invalid email:', error.response.data.message);
    } else {
      console.log('❌ Unexpected error:', error.response?.data || error.message);
    }
  }
  
  console.log('\n🏁 Registration test completed!');
  
  // Cleanup - delete test users
  console.log('\n🧹 Cleaning up test users...');
  // Note: You would need a delete endpoint or direct database access for cleanup
  console.log('   (Manual cleanup required - delete test users from database)');
}

// Run the test
if (require.main === module) {
  testRegistration().catch(console.error);
}

module.exports = { testRegistration };
