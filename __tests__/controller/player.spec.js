// Mock dependencies
jest.mock('../../dao/playerDao');
// Mocking the playerDao module
const playerDao = require('../../dao/playerDao');
// Mocking the winston module
jest.mock('winston', () => ({
    loggers: {
        get: jest.fn().mockReturnValue({
            info: jest.fn(),
            error: jest.fn(),
        }),
        add: jest.fn()
    },
    transports: {
        Console: jest.fn(),
        File: jest.fn(),
    },
    format: {
        combine: jest.fn(),
        timestamp: jest.fn(),
        json: jest.fn(),
        prettyPrint: jest.fn(),
        errors: jest.fn(),
        printf: jest.fn(),
        metadata: jest.fn()
    },
    DailyRotateFile: jest.fn()
}));

const winston = require('winston');
const controller = require('../../controller/playerController');
const { response } = require('express');

describe('getList', () => {
    it('should send result when playerDao.getList() resolves with data', async () => {
        const mockResult = [
            {
                "playerId": 1,
                "playerName": "Uday"
            },
            {
                "playerId": 2,
                "playerName": "MSG"
            },
            {
                "playerId": 3,
                "playerName": "SHIVA"
            }
        ];
        playerDao.getList.mockResolvedValue(mockResult);

        const mockResponse = {
            send: jest.fn(),
            status: jest.fn(),
        };

        await controller.getList({}, mockResponse);

        expect(playerDao.getList).toHaveBeenCalled();
        expect(mockResponse.send).toHaveBeenCalledWith(mockResult);

        // Optionally, you can also assert that the logger methods were called
        expect(winston.loggers.get('player').info).toHaveBeenCalled();
        expect(winston.loggers.get('error').error).not.toHaveBeenCalled(); // Assuming no error occurred
    });

    // Test when playerDao.getList() resolves with an empty array
    it('should send result when playerDao.getList() resolves with an empty array', async () => {
        const mockResult = []; // Empty array
        playerDao.getList.mockResolvedValue(mockResult);

        const mockResponse = {
            send: jest.fn(),
            status: jest.fn(),
        };

        await controller.getList({}, mockResponse);

        expect(playerDao.getList).toHaveBeenCalled();
        expect(mockResponse.send).toHaveBeenCalledWith(mockResult);
    });

    // Test when playerDao.getList() rejects with an error
    it('should send 500 status and error message when playerDao.getList() rejects', async () => {
        const mockError = new Error('Test error');
        playerDao.getList.mockRejectedValue(mockError);

        const mockResponse = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.getList({}, mockResponse);

        expect(playerDao.getList).toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.send).toHaveBeenCalledWith('Error while fetching player list');
    });
});

describe('addPlayer', () => {
    it('should send result when playerDao.getList() resolves with data', async () => {
        const mockResult = 'Player details added successfully.';
        playerDao.addPlayer.mockResolvedValue(mockResult);

        const mockResponse = {
            send: jest.fn(),
            status: jest.fn(),
        };

        await controller.addPlayer({
            "playerName": "THALA12356",
            "sports": ["Cricker", "FootBall"]
        }, mockResponse);

        expect(playerDao.addPlayer).toHaveBeenCalled();
        expect(mockResponse.send).toHaveBeenCalledWith(mockResult);
    });

    // Test when playerDao.addPlayer() rejects with an error
    it('should send 500 status and error message when playerDao.addPlayer() rejects', async () => {
        const mockError = new Error('Test error');
        playerDao.addPlayer.mockRejectedValue(mockError);

        const mockResponse = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.addPlayer({
            "playerName": "THALA12356",
            "sports": ["Cricker", "FootBall"]
        }, mockResponse);

        expect(playerDao.addPlayer).toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.send).toHaveBeenCalledWith('Error while adding player');
    });
});
