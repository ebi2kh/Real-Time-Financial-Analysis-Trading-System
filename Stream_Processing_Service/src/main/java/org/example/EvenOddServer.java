//package org.example;
//
//import javax.websocket.*;
//import javax.websocket.server.ServerEndpoint;
//import java.io.IOException;
//
//@ServerEndpoint("/evenOdd")
//public class EvenOddServer {
//    @OnOpen
//    public void onOpen(Session session) {
//        System.out.println("Connection opened");
//    }
//
//    @OnMessage
//    public void onMessage(String message, Session session) {
//        try {
//            for (Session s : session.getOpenSessions()) {
//                s.getBasicRemote().sendText(message);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//
//    @OnClose
//    public void onClose(Session session) {
//        System.out.println("Connection closed");
//    }
//}
