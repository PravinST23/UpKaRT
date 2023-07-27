package com.pravin.upkart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pravin.upkart.entity.Cart;
import com.pravin.upkart.repository.CartRepository;

@Service
public class CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart addItemToCart(Cart cartItem) {
        return cartRepository.save(cartItem);
    }

    public void removeItemFromCart(Long cartItemId) {
        cartRepository.deleteById(cartItemId);
    }

    public void removeItemFromCartByUserIdAndProductId(Long userId, Long productId) {
        Optional<Cart> cartItem = cartRepository.findByUserIdAndProductId(userId, productId);
        cartItem.ifPresent(cart -> cartRepository.delete(cart));
    }
    
    public void increaseQuantity(Long cartItemId) {
        Cart cartItem = cartRepository.findById(cartItemId).orElse(null);
        if (cartItem != null) {
            cartItem.setQuantity(cartItem.getQuantity() + 1);
            cartRepository.save(cartItem);
        }
    }
    
    public void decreaseQuantity(Long cartItemId) {
        Cart cartItem = cartRepository.findById(cartItemId).orElse(null);
        if (cartItem != null) {
            cartItem.setQuantity(cartItem.getQuantity() - 1);
            cartRepository.save(cartItem);
        }
    }
    
    public List<Cart> getCartItemsByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }	
    public boolean isCartItemExists(Long productId, Long userId) {
        return cartRepository.findByProductIdAndUserId(productId, userId) != null;
    }
}
