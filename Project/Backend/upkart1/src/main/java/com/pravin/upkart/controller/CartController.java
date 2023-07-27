package com.pravin.upkart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pravin.upkart.entity.Cart;
import com.pravin.upkart.service.CartService;

@CrossOrigin
@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ResponseEntity<Cart> addItemToCart(@RequestBody Cart cartItem) {
        try {
            Cart addedCartItem = cartService.addItemToCart(cartItem);
            return new ResponseEntity<>(addedCartItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<String> removeItemFromCart(@PathVariable Long cartItemId) {
        try {
            cartService.removeItemFromCart(cartItemId);
            return new ResponseEntity<>("Item removed from cart.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to remove item from cart.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/user/{userId}/product/{productId}")
    public ResponseEntity<String> removeItemFromCartByUserIdAndProductId(
            @PathVariable Long userId,
            @PathVariable Long productId
    ) {
        try {
            cartService.removeItemFromCartByUserIdAndProductId(userId, productId);
            return new ResponseEntity<>("Item removed from cart.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to remove item from cart.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{userId}")
    public ResponseEntity<List<Cart>> getCartItemsByUserId(@PathVariable Long userId) {
        try {
            List<Cart> cartItems = cartService.getCartItemsByUserId(userId);
            return ResponseEntity.status(HttpStatus.OK).body(cartItems);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @PostMapping("/{cartItemId}/increaseQuantity")
    public ResponseEntity<String> increaseCartItemQuantity(@PathVariable Long cartItemId) {
        try {
            cartService.increaseQuantity(cartItemId);
            return ResponseEntity.ok("Quantity increased successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to increase quantity.");
        }
    }
    
    @PostMapping("/{cartItemId}/decreaseQuantity")
    public ResponseEntity<String> decreaseCartItemQuantity(@PathVariable Long cartItemId) {
        try {
            cartService.decreaseQuantity(cartItemId);
            return new ResponseEntity<>("Quantity decreased successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to decreased quantity.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
